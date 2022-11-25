import { w2utils, w2grid, w2popup } from './w2ui/w2ui.es6.js';

// Set settings for Spain
w2utils.locale({
	locale: 'es-es',
	dateFormat: 'dd/mm/yyyy',
	timeFormat: 'h24',
	currencyPrefix: '',
	currencySuffix: ' €',
	currencyPrecision: 2,
	groupSymbol: ',',
	decimalSymbol: '.',
	shortmonths: [
		'Ene',
		'Feb',
		'Mar',
		'Abr',
		'May',
		'Jun',
		'Jul',
		'Ago',
		'Sep',
		'Oct',
		'Nov',
		'Dic'
	],
	fullmonths: [
		'Enero',
		'Febrero',
		'Marzo',
		'Abril',
		'Mayo',
		'Junio',
		'Julio',
		'Agosto',
		'Septiembre',
		'Оctubre',
		'Noviembre',
		'Diciembre'
	],
	shortdays: ['L', 'M', 'X', 'J', 'V', 'S', 'D'],
	fulldays: [
		'Lunes',
		'Martes',
		'Miércoles',
		'Jueves',
		'Viernes',
		'Sábado',
		'Domingo'
	],
	weekStarts: 'M', // can be "M" for Monday or "S" for Sunday
	dateStartYear: 1950, // start year for date-picker
	dateEndYear: 2050 // end year for date picker
});

var people = [
	{ id: 1, text: 'John Cook' },
	{ id: 2, text: 'Steve Jobs' },
	{ id: 3, text: 'Peter Sanders' },
	{ id: 4, text: 'Mark Newman' },
	{ id: 5, text: 'Addy Osmani' },
	{ id: 6, text: 'Paul Irish' },
	{ id: 7, text: 'Doug Crocford' },
	{ id: 8, text: 'Nicolas Cage' }
];

let grid = new w2grid({
	name: 'grid',
	box: '#grid',
	show: {
		toolbar: true,
		toolbarReload: true,
		toolbarSearch: true,
		toolbarDelete: true,
		toolbarSave: true,
		footer: true
	},
	columns: [
		{
			field: 'recid',
			text: 'ID',
			size: '50px',
			sortable: true,
			resizable: true
		},
		{
			field: 'text',
			text: 'text',
			size: '120px',
			sortable: true,
			resizable: true,
			editable: { type: 'text' }
		},
		{
			field: 'int',
			text: 'int',
			size: '80px',
			sortable: true,
			resizable: true,
			render: 'int',
			editable: { type: 'int', min: 0, max: 32756 }
		},
		{
			field: 'money',
			text: 'money',
			size: '80px',
			sortable: true,
			resizable: true,
			render: 'money',
			editable: { type: 'money' }
		},
		{
			field: 'percent',
			text: 'percent',
			size: '80px',
			sortable: true,
			resizable: true,
			render: 'percent:1',
			editable: { type: 'percent', precision: 1 }
		},
		{
			field: 'color',
			text: 'color',
			size: '80px',
			sortable: true,
			resizable: true,
			editable: { type: 'color' }
		},
		{
			field: 'date',
			text: 'date',
			size: '90px',
			sortable: true,
			resizable: true,
			render: 'date',
			style: 'text-align: right',
			editable: { type: 'date' }
		},
		{
			field: 'time',
			text: 'time',
			size: '70px',
			sortable: true,
			resizable: true,
			editable: { type: 'time' }
		},
		{
			field: 'list',
			text: 'list',
			size: '50%',
			sortable: true,
			resizable: true,
			hidden: true,
			editable: { type: 'list', items: people, showAll: true },
			render: function (record, extra) {
				return extra.value?.text || '';
			}
		},
		{
			field: 'combo',
			text: 'combo',
			size: '150px',
			sortable: true,
			resizable: true,
			hidden1: true,
			editable: { type: 'combo', items: people, filter: true }
		},
		{
			field: 'div',
			text: 'div',
			size: '50%',
			sortable: true,
			resizable: true,
			editable: { type: 'div' }
		},
		{
			field: 'check',
			text: 'check',
			size: '60px',
			sortable: true,
			resizable: true,
			style: 'text-align: center',
			editable: { type: 'checkbox', style: 'text-align: center' }
		}
	],
	toolbar: {
		items: [
			{
				id: 'add',
				type: 'button',
				text: 'Añadir',
				icon: 'fa-solid fa-plus'
			},
			{
				id: 'moveUp',
				type: 'button',
				text: 'Subir',
				icon: 'fa-solid fa-chevron-up'
			},
			{
				id: 'moveDown',
				type: 'button',
				text: 'Bajar',
				icon: 'fa-solid fa-chevron-down'
			},
			{ type: 'break' },
			{ type: 'button', id: 'showChanges', text: 'Show Changes' }
		],
		onClick(event) {
			if (event.target == 'add') {
				let recid = grid.records.length + 1;
				this.owner.add({ recid });
				this.owner.scrollIntoView(recid);
				this.owner.editField(recid, 1);
			}
			if (event.target == 'showChanges') {
				showChanged();
			}
		}
	},
	records: [
		{
			recid: 1,
			int: 100,
			money: 100,
			percent: 55,
			date: '1/1/2022',
			combo: 'Some Name',
			check: true
		},
		{
			recid: 2,
			int: 200,
			money: 454.4,
			percent: 15,
			date: '1/1/2022',
			combo: 'John Cook',
			check: false,
			list: { id: 2, text: 'Steve Jobs' }
		},
		{
			recid: 3,
			int: 350,
			money: 1040,
			percent: 98,
			date: '3/14/2022',
			combo: 'Steven Johnson',
			check: true
		},
		{
			recid: 4,
			int: 350,
			money: 140,
			percent: 58,
			date: '1/31/2022',
			combo: 'John Cook',
			check: true,
			list: { id: 4, text: 'Mark Newman' }
		},
		{
			recid: 5,
			int: 350,
			money: 500,
			percent: 78,
			date: '4/1/2022',
			check: false
		},
		{
			recid: 6,
			text: 'some text',
			int: 350,
			money: 440,
			percent: 59,
			date: '4/4/2022',
			check: false
		},
		{
			recid: 7,
			int: 350,
			money: 790,
			percent: 39,
			date: '6/8/2022',
			check: false
		},
		{
			recid: 8,
			int: 350,
			money: 4040,
			percent: 12,
			date: '11/3/2022',
			check: true
		},
		{
			recid: 9,
			int: 1000,
			money: 3400,
			percent: 100,
			date: '2/1/2022',
			style: 'background-color: #ffcccc',
			editable: false
		}
	]
});

window.showChanged = function () {
	w2popup.open({
		title: 'Records Changes',
		with: 600,
		height: 550,
		body: `<pre>${JSON.stringify(grid.getChanges(), null, 4)}</pre>`,
		actions: { Ok: w2popup.close }
	});
};

window.advanceOnEdit = function (checked) {
	grid.advanceOnEdit = checked;
};

window.refreshGrid = function () {
	grid.refresh();
};
