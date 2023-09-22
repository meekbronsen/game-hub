import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import styles from "./searchInput.module.css";
import { FormEvent, useRef } from "react";

interface Props{
    onSearch: (searchText: string) => void;
}

function SearchInput({onSearch}: Props ) {
    const ref = useRef<HTMLInputElement>(null);

    const handler = (e: FormEvent) => {
        e.preventDefault();
        if (ref.current) onSearch(ref.current.value)
    }
    return (
        <form onSubmit={handler}>
        <InputGroup>
            <Input
                ref={ref}
                padding={"20px"}
                fontSize={"14px"}
                fontFamily={"Inter"}
                borderRadius={"30px"}
                placeholder="Search"
                variant={"filled"}
            />
            <InputRightElement paddingRight={"30px"} onClick={handler} >
                <SearchIcon className={styles.searchIcon} />
            </InputRightElement>
        </InputGroup>
        </form>
    );
}

export default SearchInput;
