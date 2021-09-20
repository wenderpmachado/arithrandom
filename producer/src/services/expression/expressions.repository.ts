import { EntityRepository, Repository } from "typeorm";
import { Expression } from "./expression.entity";

@EntityRepository(Expression)
export class ExpressionsRepository extends Repository<Expression> {}
