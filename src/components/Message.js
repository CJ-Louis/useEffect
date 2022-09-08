import { useEffect, useState } from "react";

function Message({ size }) {

const [sizeClass, setSizeClass] = useState('');

  useEffect( () => {

  let cname = '';
  switch (size) {
    case 'm':
      cname = 'medium';
      break;
    case 'l':
      cname = 'large';
      break;
    case 'xl':
      cname = 'xlarge';
      break;
    default:
      cname = 'small';
      break;
  }
  //console.log("This is C name", cname);
  setSizeClass(cname);
  },[size])


  return (
    <div className={`message ${sizeClass}`}>
      (Oh my! Your bird is naked!)
    </div>
  );
};

export default Message;
