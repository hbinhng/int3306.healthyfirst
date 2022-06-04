import { IsPhoneNumber } from 'class-validator';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import {
  MAX_ADDRESS_LENGTH,
  MAX_EMAIL_LENGTH,
  MAX_FAX_LENGTH,
  MAX_PHONE_LENGTH,
  MAX_WEBSITE_LENGTH,
} from '../entity-constraints/food-safety-authority-branch.entity-constraint';
import { LocationEntity } from './location.entity';

export const TABLE_NAME = 'fsa_branches';

@Entity(TABLE_NAME)
export class FoodSafetyAuthorityBranchEntity {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
  id!: number;

  @Column('int', { name: 'responsible_location_code' })
  responsibleLocationCode!: number;

  @ManyToOne(() => LocationEntity, (location) => location.code, {
    nullable: false,
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    eager: false,
  })
  @JoinColumn({
    name: 'responsible_location_code',
    referencedColumnName: 'code',
  })
  responsibleLocation!: LocationEntity;

  @Column('varchar', { name: 'address', length: MAX_ADDRESS_LENGTH })
  address!: string;

  @Column('varchar', { name: 'email', length: MAX_EMAIL_LENGTH })
  email!: string;

  @IsPhoneNumber('VN')
  @Column('varchar', { name: 'phone', length: MAX_PHONE_LENGTH })
  phone!: string;

  @Column('varchar', { name: 'website', length: MAX_WEBSITE_LENGTH })
  website!: string;

  @Column('varchar', { name: 'fax', length: MAX_FAX_LENGTH })
  fax!: string;
}