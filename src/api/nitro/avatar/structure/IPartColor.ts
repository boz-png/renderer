export interface IPartColor
{
    id: string;
    index: number;
    clubLevel: number;
    isSelectable: boolean;
    rgb: number;
    setValues(id: string, index: number): void
}
