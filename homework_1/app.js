Vue.createApp({
	data() {
		return {
			items: [
				{
					name: 'Основы',
					isActive: true,
					unActive: false,
				},
				{
					name: 'Компоненты',
					isActive: false,
					unActive: false,
				},
				{
					name: 'Роутер',
					isActive: false,
					unActive: false,
				},
				{
					name: 'Vuex',
					isActive: false,
					unActive: false,
				},
				{
					name: 'Composition',
					isActive: false,
					unActive: false,
				},
			],
			btnText: '',
			visibleBtns: true,
		}
	},

	methods: {
		switchClass(i) {
			this.items.map((item, idx) => {
				if (idx < i) {
					item.isActive = false;
					item.unActive = true;
				} else if (idx > i) {
					item.isActive = false;
					item.unActive = false;
				} else if (idx == i){
					item.isActive = true;
					item.unActive = false;
				}
			});
		},

		nextClass() {
			let mass = this.items;
			for (let i = 0; i < mass.length - 1; i++) {
				if(mass[i].isActive == true){
					mass[i].isActive = false;
					mass[i].unActive = true;
					mass[i+1].isActive = true;
					mass[i+1].unActive = false;
					break;
				}
			}
		},

		prevClass() {
			let mass = this.items;
			for (let i = mass.length - 1; i > 0; i--) {
				if(mass[i].isActive == true){
					mass[i].isActive = false;
					mass[i].unActive = false;
					mass[i-1].isActive = true;
					mass[i-1].unActive = false;
					break;
				}
			}
		},

		onClick() {
			this.nextClass();
			
			if (this.btnText == 'Закончить') {
				this.visibleBtns = false;
			}
		},

		resetClass(){
			for (let i = 0; i < this.items.length; i++) {
				if (i == 0) {
					this.items[i].isActive = true;
					this.items[i].unActive = false;
				} else {
					this.items[i].isActive = false;
					this.items[i].unActive = false;
				}
			}

			this.visibleBtns = true;
		}
	},

	computed: {
		changeText(){
			if (this.items[this.items.length - 1].isActive == true) {
				return this.btnText = 'Закончить';
			} else {
				return this.btnText = 'Вперед';
			}
		}
	}
}).mount('#app');