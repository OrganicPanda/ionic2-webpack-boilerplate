import {NavController, NavParams, Page} from 'ionic-angular';
import {SessionDetailPage} from '../session-detail/session-detail';


@Page({
    template: require('./speaker-detail.html')
})
export class SpeakerDetailPage {
    speaker: any;

    constructor(private nav: NavController, private navParams: NavParams) {
        this.speaker = this.navParams.data;
    }

    goToSessionDetail(session) {
        this.nav.push(SessionDetailPage, session);
    }
}
