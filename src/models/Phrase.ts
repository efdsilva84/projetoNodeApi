import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface Phrase extends Model{
    author: any;
    txt: any;
    id:number;
    name:string;
    age:number;
}

export const Phrase = sequelize.define<Phrase>("Phrase",{
    id:{
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED
    },
    author:{
        type: DataTypes.STRING
    },
    txt:{
        type: DataTypes.STRING,
        // defaultValue: 18
    }

},{
    tableName: 'phrases',
    timestamps:false

});

