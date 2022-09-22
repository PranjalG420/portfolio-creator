import { getDisplayName } from "next/dist/shared/lib/utils";
import react from "react";
import { useState } from "react";

export default function about() {
    const style =
        "px-2 py-1 bg-slate-300 flex-grow hover:bg-slate-600 hover:text-white";
    const [value, setValue] = useState("0");
    const [previous, setPrevious] = useState("0");
    const [operand, setOperand] = useState("");
    function clearNum() {
        setValue("0");
        setPrevious("0");
        setOperand("");
    }
    function flipSign() {
        setValue((Number(value) * -1).toString());
    }
    const compute = (operand) => {
        setPrevious(value);
        setValue("0");
        setOperand(operand);
    };
    function computeFinal() {
        if (operand == "/") {
            setValue((prev) => (Number(previous) / Number(prev)).toString());
        } else if (operand == "*") {
            setValue((prev) => (Number(prev) * Number(previous)).toString());
        } else if (operand == "+") {
            setValue((prev) => (Number(prev) + Number(previous)).toString());
        } else if (operand == "-") {
            setValue((prev) => (Number(previous) - Number(prev)).toString());
        } else if (operand == "%") {
            setValue((prev) => (Number(previous) / 100).toString());
        }
    }
    const changeNum = (number) => {
        if (value == "0") {
            setValue(number);
        } else {
            setValue((prev) => prev.toString() + number.toString());
        }
    };

    return (
        <>
            <div className="mx-10 flex text-neutral-900 font-bold flex-col max-w-[200px]">
                <div className="">
                    <div className={style}>{value}</div>
                </div>
                <div className="flex flex-row">
                    <button className={style} onClick={clearNum}>
                        AC
                    </button>
                    <button className={style} onClick={flipSign}>
                        +/-
                    </button>
                    <button
                        className={style}
                        onClick={() => {
                            compute("%");
                        }}
                    >
                        %
                    </button>
                    <button
                        className={style}
                        onClick={() => {
                            compute("/");
                        }}
                    >
                        ÷
                    </button>
                </div>
                <div className="flex flex-row">
                    <button
                        className={style}
                        onClick={() => {
                            changeNum(7);
                        }}
                    >
                        7
                    </button>
                    <button
                        className={style}
                        onClick={() => {
                            changeNum(8);
                        }}
                    >
                        8
                    </button>
                    <button
                        className={style}
                        onClick={() => {
                            changeNum(9);
                        }}
                    >
                        9
                    </button>
                    <button
                        className={style}
                        onClick={() => {
                            compute("*");
                        }}
                    >
                        x
                    </button>
                </div>
                <div className="flex-row flex">
                    <button
                        className={style}
                        onClick={() => {
                            changeNum(4);
                        }}
                    >
                        4
                    </button>
                    <button
                        className={style}
                        onClick={() => {
                            changeNum(5);
                        }}
                    >
                        5
                    </button>
                    <button
                        className={style}
                        onClick={() => {
                            changeNum(6);
                        }}
                    >
                        6
                    </button>
                    <button
                        className={style}
                        onClick={() => {
                            compute("-");
                        }}
                    >
                        -
                    </button>
                </div>
                <div className="flex flex-row">
                    <button
                        className={style}
                        onClick={() => {
                            changeNum(1);
                        }}
                    >
                        1
                    </button>
                    <button
                        className={style}
                        onClick={() => {
                            changeNum(2);
                        }}
                    >
                        2
                    </button>
                    <button
                        className={style}
                        onClick={() => {
                            changeNum(3);
                        }}
                    >
                        3
                    </button>
                    <button
                        className={style}
                        onClick={() => {
                            compute("+");
                        }}
                    >
                        +
                    </button>
                </div>
                <div className="flex flex-row">
                    <button
                        className={style}
                        onClick={() => {
                            changeNum(0);
                        }}
                    >
                        0
                    </button>
                    <button
                        className={style}
                        onClick={() => {
                            setValue(value + ".");
                        }}
                    >
                        .
                    </button>
                    <button className={style} onClick={computeFinal}>
                        =
                    </button>
                </div>
            </div>
        </>
    );
}
