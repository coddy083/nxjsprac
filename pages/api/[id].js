// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const PostDesc = [
    {
      id : 1,
      name : 'Post 1',
      desc : 'Post 1 Description'
    },
    {
      id : 2,
      name : 'Post 2',
      desc : 'Post 2 Description'
    },
    {
      id : 3,
      name : 'Post 3',
      desc : 'Post 3 Description'
    }
  ]
  console.log(req.query);
  const id = req.query.id;
  const findPost = PostDesc.find((item) => item.id == id);
  console.log(findPost);
  res.status(200).json(findPost);
}