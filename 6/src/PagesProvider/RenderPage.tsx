import { ReactNode } from "react";
import { usePages } from "./PagesProvider";
import { MainPage } from "../pages/MainPage";
import { UsersPage } from "../pages/UsersPage";
import { UserInfoPage } from "../pages/UserInfoPage";

export const RenderPage = (): ReactNode => {
	const { name } = usePages();

	if (name === "/") {
		return <MainPage />;
	}

	if (name === "/users") {
		return <UsersPage />;
	}

	const userId = name.replace('/users/', '')
	if (!!userId) {
		return <UserInfoPage userId={userId} />;
	}
	return null;
};
