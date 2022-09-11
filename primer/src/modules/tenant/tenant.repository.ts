import {Injectable} from '@nestjs/common';
import {DataSource, Repository, SelectQueryBuilder} from 'typeorm';
import {Tenant} from './tenant.entity';

@Injectable()
export class TenantRepository extends Repository<Tenant> {
  constructor(private dataSource: DataSource) {
    super(Tenant, dataSource.createEntityManager());
    Tenant.dataSource = dataSource;
  }
  private q(): SelectQueryBuilder<Tenant> {
    return this.createQueryBuilder('Tenant');
  }

  public async findAll() {
    return this.q().getMany();
  }

  public async findOne(options: {where: {id: number}}) {
    return this.q().where(options.where).getOne();
  }

  public async findOneByAlias(alias: string) {
    return this.q().where({alias}).getOne();
  }

  public findOneByDomain(domain: string) {
    return this.createQueryBuilder('Tenant').where(':domain = ANY(domains)', {domain}).getOne();
  }
}
