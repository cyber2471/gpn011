import { CreatePostInput } from './create-post.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePostInput extends PartialType(CreatePostInput) {
  @Field(() => Int)
  id: number;
  @Field(() => String, { description: '제목'})
  title: string;
  @Field(() => String, { description: '게시내용'})
  content: string;
  @Field(() => Boolean, { description: '게시여부'})
  published: boolean;
  @Field(() => Int, { description: '사용자'})
  authorId: number ;
}
