import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class DeletePostInput {
  @Field(() => Int, { description: '게시번호' })
  id: number;

}
