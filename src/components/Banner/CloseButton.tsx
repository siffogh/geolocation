import { handleGeoBannerClose } from "@/app/actions";
import Image from "next/image";

export default function CloseButton() {
  return (
    <button onClick={() => handleGeoBannerClose(window.location.pathname)}>
      <Image src="/icons/cross.svg" alt="Close" width={14} height={14} />
    </button>
  );
}
