import { IRoomSession } from '../IRoomSession';
import { RoomSessionEvent } from './RoomSessionEvent';

export class RoomSessionUserFigureUpdateEvent extends RoomSessionEvent
{
    public static USER_FIGURE: string = 'RSUBE_FIGURE';

    private _roomIndex: number = 0;
    private _figure: string = '';
    private _gender: string = '';
    private _customInfo: string = '';
    private _achievementScore: number;
    private _xpRoleplay: string = '';
	private _perfilBanner: string = '';

    constructor(session: IRoomSession, roomIndex: number, figure: string, gender: string, customInfo: string, achievementScore: number, _arg_7: string, _arg_8: string)
    {
        super(RoomSessionUserFigureUpdateEvent.USER_FIGURE, session);

        this._roomIndex = roomIndex;
        this._figure = figure;
        this._gender = gender;
        this._customInfo = customInfo;
        this._achievementScore = achievementScore;
        this._xpRoleplay = _arg_7;
		this._perfilBanner = _arg_8;
    }

    public get roomIndex(): number
    {
        return this._roomIndex;
    }

    public get figure(): string
    {
        return this._figure;
    }

    public get gender(): string
    {
        return this._gender;
    }

    public get customInfo(): string
    {
        return this._customInfo;
    }

    public get activityPoints(): number
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
