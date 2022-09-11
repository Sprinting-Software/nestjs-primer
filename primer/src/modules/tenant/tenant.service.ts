import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {EntityNotFoundError} from '../../error/common.error';
import loggerService from '../../logger/logger.service';
import {Tenant} from './tenant.entity';
import {TenantRepository} from './tenant.repository';

@Injectable()
export class TenantService {
  constructor(@InjectRepository(TenantRepository) private readonly repository: TenantRepository) {}

  public async findAll(): Promise<Tenant[]> {
    return this.repository.findAll();
  }

  public async findOne(id: number): Promise<Tenant> {
    const item = await this.repository.findOne({where: {id}});
    if (!item) {
      loggerService.error(__filename, `No tenant found for id: ${id}`);
      throw new EntityNotFoundError({name: 'Tenant', id});
    }
    return item;
  }

  public async findOneByAlias(alias: string) {
    return this.repository.findOneByAlias(alias);
  }
}
