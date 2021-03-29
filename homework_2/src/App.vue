<template>
    <div>
        <div class="container column">
            <app-form @submit="writeData"></app-form>
            <app-resume :resume="resume"></app-resume>
        </div>
        
        <div class="container">
            <div class="loader" v-if="loading"></div>
            <p>
                <button class="btn primary">Загрузить комментарии</button>
            </p>
            <div class="card">
                <h2>Комментарии</h2>
                <ul class="list">
                    <li class="list-item">
                        <div>
                            <p><strong>test@microsoft.com</strong></p>
                            <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, reiciendis.</small>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import AppResume from './components/AppResume'
import AppForm from './components/AppForm'
export default {
    data() {
        return {
            resume: [],
            loading: false,
        }
    },

    methods: {
        writeData(obj) {
            this.resume.push(obj);
        }
    },

    components: {
        AppForm,
        AppResume,
    }
}
</script>

<style>
.avatar {
    display: flex;
    justify-content: center;
}

.avatar img {
    width: 150px;
    height: auto;
    border-radius: 50%;
}
</style>
