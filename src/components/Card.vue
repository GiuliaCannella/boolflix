<script>
import { API_URLS } from '../services/apiUrls';
export default {
    data() {
        return {
            numeroStelle: 5
        }
    },
    props: {
        title: String,
        originalTitle: String,
        language: String,
        vote: String,
        imgUrl: String
    },
    methods: {
        getImageUrl(posterPath) {
            if (posterPath != null) {
                const baseUrl = API_URLS.BASE_IMAGE_URL;
                const imageSize = 'w342';
                return `${baseUrl}${imageSize}${posterPath}`;
            }
            return '/src/assets/img/default.png';
        },
        hasLanguage(language) {
            if (language != null && language != '') {
                return true;
            }
            return false;
        },
        starActive(index) {
            let numero = Math.round(this.vote / 2);
            while (numero > index) {
                return "active";
            }
        },
    }
}
</script>

<template>
    <div class="card-boolflix">
        <img class="poster" :src="getImageUrl(imgUrl)" alt="">
        <div class="info-card">
            <p><span class="fw-bold">Titolo</span>: {{ title }}</p>
            <p><span class="fw-bold">Titolo originale</span>: {{ originalTitle }}</p>
            <p><span class="fw-bold">Lingua</span>: <img class="language" v-if="hasLanguage(language)"
                    :src="`/src/assets/img/${language}.png`" alt=""></p>
            <p><span class="fw-bold">Voto</span>:
                <FontAwesomeIcon v-for="(numero, index) in numeroStelle" :class="starActive(index)"
                    icon="fas fa-star" />
            </p>
        </div>
    </div>
</template>

<style lang="scss">
.card-boolflix {
    width: calc(100% / 3 - 20px);
    margin: 10px;
    border: 2px solid black;
    height: 430px;
    position: relative;

    .poster {
        height: 427px;
        width: 100%;
        object-fit: cover;
    }

    .info-card {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0%;
        left: 0%;
        display: none;

        .language {
            width: 30px;
        }

        .fa-star {
            color: white;

            &.active {
                color: yellow;
            }
        }
    }

    &:hover {
        .info-card {
            display: flex;
            flex-direction: column;
            padding: 1em 0.5em;
            background-color: #434343;
            color: white;

            span {
                color: crimson;
            }
        }

        .poster {
            display: none;
        }
    }
}
</style>