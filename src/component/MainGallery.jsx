import React from 'react'
import { Col, Container, Row } from 'reactstrap';

const MainGallery = ({tg}) => {
  console.log(tg);
  return (
    <Container>
      <Col>
        <div className="imgtitle d-flex justify-content-between">
          <h1>galTitle</h1>
          <span className="clickcount">조회수 : galViewCount</span>
        </div>
      </Col>
      <hr />
      <Col>
        <div className="keywordbox">
          # 송지 대죽리 죽도&증도, 전라남도 해남군, 신비의 바닷길, 땅끝관광지, 섬, 바다, 바닷가
        </div>
        <div className="imgbox">
          <img className="tour-img" src="http://tong.visitkorea.or.kr/cms2/website/95/2816795.jpg" alt="전라남도 해남군 송지면" />
        </div>
      </Col>
      <hr />
      <Col>
        <div className="descbox">
          <p>위치 : galPhotographyLocation</p>
          <p>작가 : galPhotographer</p>
          <p>촬영일(년/월) : galPhotographyMonth</p>
        </div>
      </Col>
    </Container>
    // <Container>
    //   <Row>
    //     <Col xs="6">
    //       <img className="tour-img" src={tg.galWebImageUrl} alt={tg.galTitle} />
    //     </Col>
    //     <Col xs="6"></Col>
    //   </Row>
    // </Container>
  )
}

export default MainGallery