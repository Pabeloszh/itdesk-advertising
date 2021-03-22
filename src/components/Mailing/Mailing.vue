<template>
    <Title :groupedProps="titleData" />
    <div class="mailing-container">
        <div class="mailing-desc">
            <div>
                <p>Codziennie jesteśmy atakowani mailami reklamowymi na naszych skrzynkach pocztowych. Kluczem do sukcesu jest dobrze przygotowany mailing , w którym klient czuje personalizację tematu dostosowaną do jego potrzeb i zainteresowań.</p>
            </div>
            <div>
                <p>Równie ważna jest dobrze dobrana baza odbiorców czy idealny czas wysyłki.</p>
                <p><strong>Wysyłamy właściwe wiadomości we właściwym czasie!</strong></p>
            </div>
        </div>
        <h2>W zakres naszych działań mailing-u wchodzą:</h2>
        <div class="mailing-info">
            <div>
                <h3>Newslettery</h3>
                <p>Przygotowujemy maile z informacjami o nowych ofertach i promocjach. Charakteryzuje je ciekawy wygląd i grafika, tworzone przez naszych kreatywnych specjalistów.</p>
            </div>
            <div>
                <h3>Wiadomości automation</h3>
                <p>Opracowujemy wysyłkę emaila po zakupie, porzuceniu koszyka, wizycie na stronie i innych zdarzeniach odnotowanych na domenie Twojej firmy.</p>
            </div>
            <div>
                <h3>Autorespondery</h3>
                <p>W biznesie najważniejsze to mieć stały kontakt z klientem, lecz nie może być on zbyt chaotyczny i intensywny. Buduj trwałe relacje przy pomocy serii zaplanowanych wiadomości.</p>
            </div>
            <div>
                <h3>Segmentujemy odbiorców</h3>
                <p>Bazy danych dysponują ogromnymi ilościami leadów. Bezcelowe byłoby wysyłanie tego samego maila do wszystkich. Dlatego sporządzamy wysyłki do precyzyjnie określonych grup odbiorców dobranych dla danego celu.</p>
            </div>
            <div>
                <h3>Idealny czas wysyłki</h3>
                <p>Każdy z nas przegląda skrzynkę pocztową w różnych porach dnia dostosowanych do własnego dobowego rytmu. Dzięki narzędziom takim jak Perfect Timing czy Time Travel przygotujemy Twoją wysyłkę w najlepiej dobranym czasie dla Twoich subskrybentów.</p>
            </div>
            <div>
                <h3>Powiadomienia z bloga</h3>
                <p>Jako content marketing prowadzisz <a href="https://agencja-interaktywna.opole.pl/blog/">bloga firmowego</a> lub <a href="https://www.facebook.com/itDesk-agencja-interaktywna-106076080801166">Fanpage’a</a>, jego subskrybenci powinni zostać poinformowani o nowych wpisach, aby nie zapomnieli o Twojej marce. W tym pomogą Ci nasi specjaliści, przygotowując odpowiednie powiadomienia.</p>
            </div>
        </div>
    </div>
</template>
<script>
import Title from "@/components/Title/Title.vue";
export default {
    name:"Mailing",
    components: {
        Title,
    },
    data() {
        return {
        titleData: {
            backgroundPhoto: {
            backgroundImage:
                "url(https://agencja-interaktywna.opole.pl/wp-content/uploads/2020/09/back9.jpg)"
            },
            desc: "Przemyslany",
            title: "Mailing"
        }
        };
    }
}
</script>
<style scoped lang="scss" src="./Mailing.style.scss">

</style>