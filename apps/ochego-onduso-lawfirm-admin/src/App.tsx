import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { HearingList } from "./hearing/HearingList";
import { HearingCreate } from "./hearing/HearingCreate";
import { HearingEdit } from "./hearing/HearingEdit";
import { HearingShow } from "./hearing/HearingShow";
import { CourtList } from "./court/CourtList";
import { CourtCreate } from "./court/CourtCreate";
import { CourtEdit } from "./court/CourtEdit";
import { CourtShow } from "./court/CourtShow";
import { CaseModelList } from "./caseModel/CaseModelList";
import { CaseModelCreate } from "./caseModel/CaseModelCreate";
import { CaseModelEdit } from "./caseModel/CaseModelEdit";
import { CaseModelShow } from "./caseModel/CaseModelShow";
import { ClientList } from "./client/ClientList";
import { ClientCreate } from "./client/ClientCreate";
import { ClientEdit } from "./client/ClientEdit";
import { ClientShow } from "./client/ClientShow";
import { LawyerList } from "./lawyer/LawyerList";
import { LawyerCreate } from "./lawyer/LawyerCreate";
import { LawyerEdit } from "./lawyer/LawyerEdit";
import { LawyerShow } from "./lawyer/LawyerShow";
import { JudgeList } from "./judge/JudgeList";
import { JudgeCreate } from "./judge/JudgeCreate";
import { JudgeEdit } from "./judge/JudgeEdit";
import { JudgeShow } from "./judge/JudgeShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Ochego Onduso Lawfirm"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Hearing"
          list={HearingList}
          edit={HearingEdit}
          create={HearingCreate}
          show={HearingShow}
        />
        <Resource
          name="Court"
          list={CourtList}
          edit={CourtEdit}
          create={CourtCreate}
          show={CourtShow}
        />
        <Resource
          name="CaseModel"
          list={CaseModelList}
          edit={CaseModelEdit}
          create={CaseModelCreate}
          show={CaseModelShow}
        />
        <Resource
          name="Client"
          list={ClientList}
          edit={ClientEdit}
          create={ClientCreate}
          show={ClientShow}
        />
        <Resource
          name="Lawyer"
          list={LawyerList}
          edit={LawyerEdit}
          create={LawyerCreate}
          show={LawyerShow}
        />
        <Resource
          name="Judge"
          list={JudgeList}
          edit={JudgeEdit}
          create={JudgeCreate}
          show={JudgeShow}
        />
      </Admin>
    </div>
  );
};

export default App;
