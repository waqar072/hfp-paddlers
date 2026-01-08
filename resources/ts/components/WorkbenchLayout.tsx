import clsx from "clsx";
import React, { ReactNode } from "react";
import { Link } from "wouter";
import { useTheme } from "../hooks/useTheme"; // <--- 1. Import the hook

import {
  workbench,
  workbench__content,
  workbench__header,
  workbench__header__link,
  workbench__header__linkActive,
  workbench__header__track,
} from "./WorkbenchLayout.module.css";

function activeClassName(isActive: boolean) {
  return clsx(workbench__header__link, {
    [workbench__header__linkActive]: isActive,
  });
}

export function WorkbenchLayout({ children }: { children: ReactNode }) {
  const { theme, toggleTheme } = useTheme(); // <--- 2. Initialize the hook

  return (
    <div className={workbench}>
      <div className={workbench__header}>
        <div className={workbench__header__track}>
          <Link className={workbench__header__link} href="/">
            Paddler 🏓
          </Link>
        </div>
        <div className={workbench__header__track}>
          <Link className={activeClassName} href="/">
            Dashboard
          </Link>
          <Link className={activeClassName} href="/model">
            Model
          </Link>
          <Link className={activeClassName} href="/prompt">
            Prompt
          </Link>

          {/* <--- 3. ADDED: Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            style={{
              marginLeft: "16px",
              background: "transparent",
              border: "1px solid var(--color-border)",
              color: "var(--color-body-font)",
              padding: "4px 10px",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "12px",
              fontFamily: "inherit",
              transition: "all 0.2s ease"
            }}
          >
            {theme === "blue" ? "⚪ White Mode" : "🔵 Blue Mode"}
          </button>
        </div>
      </div>
      <div className={workbench__content}>{children}</div>
    </div>
  );
}