import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {TenantRepository} from './tenant.repository';
import {TenantService} from './tenant.service';

@Module({
  imports: [TypeOrmModule.forFeature([TenantRepository])],
  controllers: [],
  providers: [TenantService, TenantRepository],
  exports: [TypeOrmModule, TenantService],
})
export class TenantModule {}
