import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService 
  extends PrismaClient<Prisma.PrismaClientOptions, 'query' | 'error'>
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    const loggingOptions = {
    log: [
      {
        emit: 'event',
        level: 'query',
      },
      {
        emit: 'stdout',
        level: 'error',
      },
      {
        emit: 'stdout',
        level: 'info',
      },
      {
        emit: 'stdout',
        level: 'warn',
      },                  
    ],
  } satisfies Prisma.PrismaClientOptions;
  super(loggingOptions);

  this.$on('query', (e) => {
    console.log(' ');
    console.log('Query: ' + e.query);
    console.log('Params: ' + e.params);
    console.log('Duration: ' + e.duration + 'ms');

    // console.log('\xlb[34mQuery: \xlb[0m' + e.query);
    // console.log('\xlb[32mParams: \xlb[0m' + e.params);
    // console.log('\xlb[33m%s\xlb[0m', 'Duration: ' + e.duration + 'ms');
  });

  this.$on('error', async (e) => {
    console.log(' ');
    console.log('\\xlb[31mMessage: \\xlb[0m' + e.message);
    console.log('Target: ' + e.target);
    console.log('\\xlb[33m%s\\xlb[0m', 'TimeStamp: ' + e.timestamp);
  })
}

  async onModuleInit() {
    await this.$connect();
  }
  async onModuleDestroy() { 
    await this.$disconnect();
  }
 

}

        
  