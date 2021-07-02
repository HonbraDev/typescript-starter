import main from "./main";

main()
  .then((result: any) => {
    if (result) console.log(result);
  })
  .catch((error) => console.error(error));
