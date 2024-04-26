import { useRecordContext } from "react-admin";
import { Map, Marker } from "pigeon-maps";
import classes from "./UserShowMap.module.css";

const UserShowMap = () => {
  const record = useRecordContext();

  const lat = Number(record?.address.geo.lat);
  const lng = Number(record?.address.geo.lng);

  return record?.address.geo ? (
    <div className={classes.root}>
      <Map defaultCenter={[lat, lng]} defaultZoom={11}>
        <Marker width={50} anchor={[lat, lng]} />
      </Map>
    </div>
  ) : null;
};

export default UserShowMap;
