export const iconWebOutput = `/**
 * This file was generated from MyWidget.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { DynamicValue, WebIcon } from "mendix";

export interface IconsType {
    firstIcon: DynamicValue<WebIcon>;
    secondIcon: DynamicValue<WebIcon>;
}

export interface IconsPreviewType {
    firstIcon: { type: "glyph"; iconClass: string; } | { type: "image"; imageUrl: string; } | null;
    secondIcon: { type: "glyph"; iconClass: string; } | { type: "image"; imageUrl: string; } | null;
}

export interface MyWidgetContainerProps {
    name: string;
    tabIndex?: number;
    id: string;
    icons: IconsType[];
}

export interface MyWidgetPreviewProps {
    readOnly: boolean;
    icons: IconsPreviewType[];
}
`;

export const iconNativeOutput = `export interface IconsType {
    firstIcon: DynamicValue<NativeIcon>;
    secondIcon: DynamicValue<NativeIcon>;
}

export interface MyWidgetProps<Style> {
    name: string;
    style: Style[];
    icons: IconsType[];
}`;
