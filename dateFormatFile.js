glueforceUtil.getDateFormat(glueforce.dateFormatOrder[0]+'/'+glueforce.dateFormatOrder[1]+'/'+glueforce.dateFormatOrder[2])


var localfomrat = glueforcenav.getWorkspaceConfig().UserSmallURL.LocaleSidKey = glueforcenav.getWorkspaceConfig().UserSmallURL.LocaleSidKey.replace(/_/g, '-'),
		formatParts = new Intl.DateTimeFormat(localfomrat),
		formatParts = formatParts && formatParts.formatToParts();
		glueforcenav.dateFormatOrder = [];
		Ext.Array.each(formatParts, function (format) {
			switch (format.type) {
			case 'month':
				glueforcenav.dateFormatOrder.push('m');
				break;
			case 'day':
				glueforcenav.dateFormatOrder.push('d');
				break;
			case 'year':
				glueforcenav.dateFormatOrder.push('y');
				break;
			}
		});
		if (!glueforcenav.dateFormatOrder.length) {
			glueforcenav.dateFormatOrder = ['d', 'm', 'Y']; // default Order
		}