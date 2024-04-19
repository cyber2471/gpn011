import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePostInput {
  @Field(() => Int, { description: '게시번호' })
  id: number;
  @Field(() => String, { description: '제목'})
  title: string;
  @Field(() => String, { description: '게시내용'})
  content: string;
  @Field(() => Boolean, { description: '게시여부'})
  published: boolean;
  @Field(() => Int, { description: '사용자 아이디'})
  authorId: number;  
}
