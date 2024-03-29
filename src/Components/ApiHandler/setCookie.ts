import { COOKIE } from "../../Utill/Constants";

export default function setCookie(
  cname: string = COOKIE.KEY,
  cvalue: string = "",
  exdays: number = 1
) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
