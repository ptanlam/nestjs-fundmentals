import {MigrationInterface, QueryRunner} from "typeorm";

export class SchemaSync1628167562579 implements MigrationInterface {
    name = 'SchemaSync1628167562579'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "event" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "type" character varying NOT NULL, "payload" json NOT NULL, CONSTRAINT "PK_30c2f3bbaf6d34a55f8ae6e4614" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "public"."coffee" ADD "description" character varying`);
        await queryRunner.query(`ALTER TABLE "public"."coffee" ADD "recommendations" integer NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."coffee" DROP COLUMN "recommendations"`);
        await queryRunner.query(`ALTER TABLE "public"."coffee" DROP COLUMN "description"`);
        await queryRunner.query(`DROP TABLE "event"`);
    }

}
