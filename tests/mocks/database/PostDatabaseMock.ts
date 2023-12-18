import { Post, PostDB, PostVoteDB } from "../../../src/models/Post";
import { BaseDatabase } from "../../../src/database/BaseDatabase";

const postMock: PostDB[]=[
{
  id: "id-mock-post",
  content:"Mock de post",
  votes_count:1,
  comments_count:0,
  creator_id:"id-mock-fulano",
  created_at: new Date().toISOString()
}
]

const postVotesMock[]=[
{
  post_id:"id-mock-post", 
  
}

]