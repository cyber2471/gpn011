import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PostService } from './post.service';
import { PostModel } from './entities/post.entity';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';

@Resolver(() => PostModel)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Mutation(() => PostModel)
  createPost(@Args('createPostInput') createPostInput: CreatePostInput) : Promise<PostModel> {
    return this.postService.create(createPostInput);
  }

  @Query(() => [PostModel], { name: 'PostModelAll' })
  findAll() : Promise<PostModel[]> {
    return this.postService.findAll();
  }

  @Query(() => PostModel, { name: 'PostModel' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.postService.findOne(id);
  }

  @Mutation(() => PostModel)
  updatePost(@Args('updatePostInput') updatePostInput: UpdatePostInput) {
    return this.postService.update(updatePostInput.id, updatePostInput);
  }

  @Mutation(() => PostModel)
  removePost(@Args('id', { type: () => Int }) id: number) {
    return this.postService.remove(id);
  }
}
