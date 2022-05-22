import firebase from 'firebase/compat/app';
import { useCallback, useEffect, useMemo, useState } from "react";

export const useDatabase = () => {
    return useMemo(() => firebase.database().ref('/favorites'), []);
};

export const useFetchData = (ref, id) => {
    const [data, setData] = useState();
    useEffect(() => {
      ref.on('value', snapshot => {
        if (snapshot?.val()) {
          setData(snapshot.val()[id]);
        }
      });
      return () => {
        ref.off();
      };
    }, [ref]);
    return { data };
  }
  
export const useSetDocument = (ref) => {
    const updateDocument = useCallback(
      (document) => {
        ref.set(document);
      }, [ref]
    );
    return updateDocument;
};
  