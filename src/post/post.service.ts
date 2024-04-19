import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PostModel } from './entities/post.entity';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';


@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}

  create(createPostInput: CreatePostInput) {
    // return 'This action adds a new post';

    return this.prisma.post.create({
      data:createPostInput
    })
  }

  findAll() : Promise<PostModel[]> {
    // return `This action returns all post`;
    return this.prisma.post.findMany();
  }

  findOne(id: number) {
    // return `This action returns a #${id} post`;
    return this.prisma.post.findFirst(
    {
      where : {
        id
      }
    }
    );
  }

  update(id: number, updatePostInput: UpdatePostInput) {
    return this.prisma.post.update({
      where: {
        id
      },
      data: updatePostInput
    });
  }

  remove(id: number) {
  return this.prisma.post.delete({
    where : {
      id
    }
   });
  }

}
