import {Column, CreateDateColumn, DataSource, Entity, PrimaryColumn, UpdateDateColumn} from 'typeorm';

@Entity('Tenant')
export class Tenant {
  @PrimaryColumn('int')
  public id!: number;

  @Column('jsonb')
  public domains!: string[];

  @Column('jsonb')
  public settingsClientSide!: any;

  @Column('jsonb')
  public settingsServerSide!: any;

  @Column('text')
  public name!: string;

  @Column('text')
  public alias!: string;

  @Column('text')
  public stateJwtKey!: string;

  @Column('text')
  public hookAuthKey!: string;

  @Column({type: 'text', array: true})
  public allowedHookUris!: string[];

  @Column('jsonb')
  public jwksKeys!: any;

  @CreateDateColumn({type: 'timestamptz'})
  public createdAt!: Date;

  @UpdateDateColumn({type: 'timestamptz'})
  public updatedAt!: Date;

  constructor(data?: Partial<Tenant>) {
    Object.assign(this, data);
  }
  static dataSource: DataSource;
}
