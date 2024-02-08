"use client";

import { SessionProvider } from "next-auth/react";

const UserProvider = ({
  children,
  session,
}: {
  children: JSX.Element;
  session?: any;
}) => <SessionProvider session={session}>{children}</SessionProvider>;

export default UserProvider;
