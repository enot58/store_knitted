import { ModelAttributeColumnOptions } from 'sequelize';
import {
  Column,
  DataType,
  HasMany,
  HasOne,
  Model,
  Table,
} from 'sequelize-typescript';
import { FilesMasterClass } from 'src/files-master-class/files-master-class.model';
import { PatternParams } from 'src/pattern-params/pattern-params.model';

interface MasterClassAttr {
  nameRu: string;
  nameEng: string;
  priceRu: number;
  priceEng: number;
}

@Table({ tableName: 'master-class', paranoid: true })
export class MasterClass extends Model<MasterClass, MasterClassAttr> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  } as ModelAttributeColumnOptions)
  id: number;

  @Column({
    type: DataType.STRING,
    unique: true,
  })
  nameRu: string;

  @Column({
    type: DataType.STRING,
    unique: true,
  })
  nameEng: string;

  @Column({
    type: DataType.INTEGER,
  })
  priceRu: number;

  @Column({
    type: DataType.INTEGER,
  })
  priceEng: number;

  @HasMany(() => PatternParams)
  params: PatternParams[];

  @HasOne(() => FilesMasterClass)
  files: FilesMasterClass;
}
