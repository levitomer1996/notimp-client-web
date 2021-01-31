// import React, { Component } from "react";

// export class Test extends Component {
//   state = {
//     profileImage: [
//       "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
//     ],
//   };
//   imageHandler = (e) => {
//     const reader = new FileReader();
//     reader.onload = () => {
//       if (reader.readyState === 2) {
//         this.setState({
//           profileImage: [...this.state.profileImage, reader.result],
//         });
//       }
//     };
//     reader.readAsDataURL(e.target.files[0]);
//   };
//   render() {
//     const { profileImage } = this.state;
//     return (
//       <div>
//         {this.state.profileImage.map((item) => {
//           return <img src={item} width={250} height={250} />;
//         })}

//         <input
//           type="file"
//           name="image-upload"
//           id="input"
//           accept="image/*"
//           onChange={this.imageHandler}
//         />
//         <div>
//           <label htmlFor="input"></label>
//         </div>
//       </div>
//     );
//   }
// }

// export default Test;
import React, { useState } from "react";
import notimp from "../../api/notimp";
export default function Test() {
  const [image, setImg] = useState(null);
  const handleImg = (e) => {
    setImg(e.target.files[0]);
  };
  const fileUpload = () => {
    notimp.post('')
  };
  return (
    <div>
      {" "}
      <form>
        <input type="file" onChange={handleImg}></input>
        {image ? <img src={image} width={250} height={250} /> : null}
        <button type={"submit"}></button>
      </form>
    </div>
  );
}
