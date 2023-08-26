<script>
    import { Alert } from "sveltestrap";
    import { Link } from "svelte-routing";

    import { get } from "svelte/store";
    import { cookiesAlertVisible } from "../Store/stores";

    let visible = get(cookiesAlertVisible);
</script>

<Alert
    class="h6 fade show fixed-bottom"
    color="secondary"
    toggle={() => (visible = false)}
    isOpen={visible}
>
    Serwis wykorzystuje pliki cookies m.in. w celu poprawienia jej dostępności.
    Każdy może sam decydować o tym czy dopuszcza pliki cookies, ustawiając
    odpowiednio swoją przeglądarkę. Właściciel serwisu gromadzi i przetwarza
    dane o użytkownikach (w tym dane osobowe) w celu realizacji usług za
    pośrednictwem serwisu. Dane są przetwarzane zgodnie z prawem i z zachowaniem
    zasad bezpieczeństwa. Więcej informacji w
    <Link to={"polityka-prywatnosci"}>Polityce prywatności</Link>.
</Alert>
