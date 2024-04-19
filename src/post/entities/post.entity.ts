import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType({description: '게시물'})
export class PostModel {
  @Field(() => Int, { description: '게시물 아이디' })
  id: number;
  @Field(() => String, { description: '제목'})
  title: string
  @Field(() => String, { description: '게시내용'})
  content: string
  @Field(() => Boolean, { description: '게시여부'})
  published: boolean
  @Field(() => Int, { description: '사용자 아이디'})
  authorId: number
}

// @ObjectType({ description: '사용자' })
// export class UserModel {
//   @Field(() => Int, { description: '사용자 아이디' })
//   id: number;
//   @Field(() => String, { description: '사용자 이름', nullable: true })
//   name: string;
//   @Field(() => String, { description: '사용자 이메일' })
//   email: string;
// }

// model Post {
//   id        Int      @default(autoincrement()) @id
//   title     String
//   content   String?
//   published Boolean? @default(false)
//   author    User?    @relation(fields: [authorId], references: [id])
//   authorId  Int?

//   @@map("tb_test_post")
// }