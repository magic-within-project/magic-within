import { DialogClose, DialogContent } from "@radix-ui/react-dialog";
import Link from "next/link";

type Props = {
  href?: string;
  confirmText: string;
};

const ConfirmPopup = ({ href = "/5-1", confirmText }: Props) => {
  return (
    <DialogContent className="fixed flex h-screen items-center justify-center border-none shadow-none">
      <div className="z-2 flex w-[280px] flex-col items-center rounded-[30px] bg-white text-center shadow-[0px_4px_9px_0px_#0000000A]">
        <p className="mt-9 text-lg font-medium text-purple">{confirmText}</p>
        <p className="text-blackConfirm mt-2 text-sm">
          หากผ่านไปแล้วไม่สามารถ
          <br />
          ย้อนกลับมาที่หน้านี้ได้
        </p>
        <div className="mb-9 mt-4 flex justify-center gap-4">
          <DialogClose>
            <button className="h-8 w-[74px] rounded-[10px] border-[2px] border-purple text-sm text-purple">
              ยกเลิก
            </button>
          </DialogClose>

          <Link href={href}>
            <button className="h-8 w-[74px] rounded-[10px] bg-purple text-sm text-white">
              ถัดไป
            </button>
          </Link>
        </div>
      </div>
    </DialogContent>
  );
};

export default ConfirmPopup;
