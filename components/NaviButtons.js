/* TODO
    - Import CSS and apply to NaviButton
*/

import Link from "next/link";
import Image from "next/image";

export default function NaviButton(props) {
    /*
    Props:
        href
        name
        image
    */
   console.log(props);

    return (
        <>
            <Link href={`/${props.url}`}>
                <div className="NaviButton">    
                    <Image src={props.image} height={100} width={100} alt={props.name}/>
                </div>
            </Link>
        </>
    );
}