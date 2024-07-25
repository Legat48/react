import { MouseEventHandler, ReactElement } from "react";
import { ILinkProps } from "./interfaces";
import { usePages } from "./PagesProvider";
import "./styles.css";

export function Transit({ children, to }: ILinkProps): ReactElement {
	const { navigate } = usePages();

	const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
		navigate(to);
	};

	return (
		<button className="button" onClick={handleClick}>
			{children}
		</button>
	);
}
