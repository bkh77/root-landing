import React from "react";
import one from "../../../img/aproach-pic/1.png";
import two from "../../../img/aproach-pic/2.png";
import three from "../../../img/aproach-pic/3.png";
import four from "../../../img/aproach-pic/4.png";
import Zoom from "react-reveal/Zoom";

const aproachData = [
  {
    id: 1,
    title: "O'quv jarayonini to'g'ri tashkillash",
    body: "O'quv jarayoni video darslar, amaliy mashqlar, mentor bilan ishlash imkoniyati hamda live meetinglar orqali olib boriladi. ",
    pic: one,
  },
  {
    id: 2,
    title: "Real loyihalarni amalga oshirish ",
    body: "O'quv jarayoni video darslar, amaliy mashqlar, mentor bilan ishlash imkoniyati hamda live meetinglar orqali olib boriladi. ",
    pic: two,
  },
  {
    id: 3,
    title: "Real loyihalarni amalga oshirish ",
    body: "O'quv jarayoni video darslar, amaliy mashqlar, mentor bilan ishlash imkoniyati hamda live meetinglar orqali olib boriladi. ",
    pic: three,
  },
  {
    id: 4,
    title: "O'quv jarayonini to'g'ri tashkillash",
    body: "O'quv jarayoni video darslar, amaliy mashqlar, mentor bilan ishlash imkoniyati hamda live meetinglar orqali olib boriladi. ",
    pic: four,
  },
];

function Aproach() {
  return (
    <div className="aproach my-4">
      <h1>Tizimga tizimli yondashuv</h1>

      <div className="row">
        {aproachData.map((item) => (
          <Zoom duration={1500} delay={600} key={item.id} bottom cascade >
            <div className="col-md-6">
              <div className="aproach-card">
                <div className="left">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
                <div className="right">
                  <img src={item.pic} alt="aproach-img" />
                </div>
              </div>
            </div>
          </Zoom>
        ))}
      </div>
    </div>
  );
}

export default Aproach;
