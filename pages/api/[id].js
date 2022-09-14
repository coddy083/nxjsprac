// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const PostDesc = [
    {
      id: 1,
      name: '태백 장성광업소 갱도서 매몰 사고…1명 고립돼 수색 중',
      desc: '사고 당시 총 작업자는 5명으로 4명은 자력으로 대피했으나 공사 직원 1명은 미처 빠져나오지 못하고 매몰됐다. 사고는 탄 채취 중 물과 석탄이 섞여 쓸려 나오면서 발생한 것으로 당국은 추정하고 있다.'

    },
    {
      id: 2,
      name: '애플페이, 韓 도입 초읽기 삼성페이 위협할까 IT클로즈업',
      desc: '애플의 간편결제 서비스 ‘애플페이’의 국내 상륙이 유력하게 점쳐지고 있다. 다만 도입 후에도 활용도는 제한적일 것이라는 시각이 다수다. 국내에서는 애플페이의 결제 방식인 근거리무선통신(NFC)을 지원하는 단말기 보급률이 현저히 낮기 때문이다.'
    },
    {
      id: 3,
      name: '한종희 삼성전자 부회장, 오스트리아 노동부장관 접견',
      desc: '13일 삼성전자는 한 부회장이 지난 8일(현지시간) 오스트리아 비엔나에서 마틴 코허 노동부 장관을 만나 경제협력과 지속가능한 미래에 대해 논의했다고 밝혔다. 올해는 한국-오스트리아 수교 130주년을 기념하는 해이기도 하다.'
    }
  ]
  const id = req.query.id;
  const findPost = PostDesc.find((item) => item.id == id);
  res.status(200).json(findPost);
}