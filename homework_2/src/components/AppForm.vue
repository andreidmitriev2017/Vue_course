<template>
    <form class="card card-w30" @submit.prevent="onSubmit">
        <div class="form-control">
            <label for="type">Тип блока</label>
            <select id="type" v-model="type" @change="checkImg">
                <option value="title">Заголовок</option>
                <option value="subtitle">Подзаголовок</option>
                <option value="avatar">Аватар</option>
                <option value="text">Текст</option>
            </select>
        </div>

        <div class="form-control">
            <label for="value">Значение</label>
            <textarea id="value" rows="3" v-model="value"></textarea>
        </div>

        <button class="btn primary" :disabled="!value">Добавить</button>
    </form>
</template>

<script>
export default {
    emits: ['submit'],

    data() {
        return {
            type: 'title',
            value: '',
            img: false,
        }
    },

    methods: {
        checkImg() {
            if (this.type === 'avatar') {
                this.img = true;
            }
        },

        onSubmit() {
            const obj = {
                type: this.type,
                value: this.value,
                img: this.img,
            };

            this.$emit('submit', obj);

            this.type = 'title';
            this.value = '';
            this.img = false;
        }
    }
}
</script>

<style>

</style>