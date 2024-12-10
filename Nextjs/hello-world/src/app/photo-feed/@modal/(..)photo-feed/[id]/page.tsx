import Image from "next/image";
import wondersImage ,{WonderImage} from "../wonders";
import Modal from '@/components/modal'; 

export default function PhotoPage({
    params :{id},
}:{
    params:{id :string};
}){
    const photo :WonderImage= wondersImage.find((p) => p.id===id)!;
    return (
        <Modal>
            <Image
                alt={photo.name}
                src={photo.src}
                className="w-full object-cover aspect-square"
                />
                <div className="bg-white py-4">
                    <h2 className="text-xl font-semibold">{photo.name}</h2>
                    <h3>{photo.photographer}</h3>
                    <h3>{photo.location}</h3>
            </div>
        </Modal>
    );
}
