import { IMessageDataWrapper, IMessageParser } from '../../../../../../core';

export class RoomUnitInfoParser implements IMessageParser
{
    private _unitId: number;
    private _figure: string;
    private _gender: string;
    private _motto: string;
    private _achievementScore: number;
    private _xpRoleplay: string;
	private _perfilBanner: string;


    public flush(): boolean
    {
        this._unitId = null;
        this._figure = null;
        this._gender = 'M';
        this._motto = null;
        this._achievementScore = 0;
        this._xpRoleplay        = null;
		this._perfilBanner      = null;

        return true;
    }

    public parse(wrapper: IMessageDataWrapper): boolean
    {
        if(!wrapper) return false;

        this._unitId = wrapper.readInt();
        this._figure = wrapper.readString();
        this._gender = wrapper.readString().toLocaleUpperCase();
        this._motto = wrapper.readString();
        this._achievementScore = wrapper.readInt();
        this._xpRoleplay        = wrapper.readString();
		this._perfilBanner      = wrapper.readString();

        return true;
    }

    public get unitId(): number
    {
        return this._unitId;
    }

    public get figure(): string
    {
        return this._figure;
    }

    public get gender(): string
    {
        return this._gender;
    }

    public get motto(): string
    {
        return this._motto;
    }

    public get achievementScore(): number
    {
        return this._achievementScore;
    }

    public get xpRoleplay(): string
    {
        return this._xpRoleplay;
    }

    public get perfilBanner(): string
    {
        return this._perfilBanner;
    }
}
