import React from "react";
import facebook from "../assets/facebook.json";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Text,
  Link,
} from "@chakra-ui/react";

const BASE_LC_URL = "https://leetcode.com/problems/";

const Leetcode = () => {
  const { questions } = facebook.data.problemsetQuestionList;
  console.log(questions);

  return (
    <OrderedList>
      {questions.map((ques) => (
        <ListItem>
          <Link href={`${BASE_LC_URL}${ques.titleSlug}`} isExternal>
            {ques.titleSlug}
          </Link>
        </ListItem>
      ))}
    </OrderedList>
  );
};

export default Leetcode;
