/* Author: Xterminator
	NPC Name: 		Heena
	Map(s): 		Maple Road : Lower level of the Training Camp (2)
	Description: 		Takes you outside of Training Camp
*/
var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 0 && mode == 0) {
			cm.sendOk("�㻹û�������ѵ�ƻ�����������뿪����ط����벻Ҫ��ԥ��������.");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendYesNo("���Ǿ������ǿ����ȥ��������������������Ը�⣬�һ��������ѵ��Ӫ���ͳ�ȥ.");
		} else if (status == 1) {
			cm.sendNext("Ȼ���һ����������ͳ�ȥ���ɵú�.");
		} else if (status == 2) {
			cm.warp(3, 0);
			cm.dispose();
		}
	}
}