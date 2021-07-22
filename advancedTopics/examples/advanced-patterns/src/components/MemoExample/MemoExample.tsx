import {
  MemoizedRenderCounter,
  RenderCounter,
  ControlledRenderCounter,
} from "../RenderCounter";
import { Button } from "../Button";
import { useState, useEffect, useMemo, useRef } from "react";
import { AgreementTypeCodes, AgreementTypeLabels } from "../../consts";

export const MemoizationExample = () => {
  const [agreementCode, setAgreementCode] = useState("");
  const [label, setLabel] = useState("");
  const [forcedRenders, setForcedRenders] = useState(0);

  const useMemoRef = useRef(0);

  const incrementUseMemoRef = () => useMemoRef.current++;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoizedValue = useMemo(() => incrementUseMemoRef(), [forcedRenders]);

  const convertCodeToLabel = () => {
    switch (agreementCode) {
      case AgreementTypeCodes.HP:
        return setLabel(AgreementTypeLabels.HIRE_PURCHASE);
      case AgreementTypeCodes.FL:
        return setLabel(AgreementTypeLabels.FINANCE_LEASE);
      case AgreementTypeCodes.LN:
        return setLabel(AgreementTypeLabels.LOAN);
      default:
        return;
    }
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      convertCodeToLabel();
    }
    return () => {
      mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [agreementCode]);

  return (
    <>
      <div>
        <Button
          label={AgreementTypeCodes.FL}
          onClick={() => setAgreementCode(AgreementTypeCodes.FL)}
        />
        <Button
          label={AgreementTypeCodes.HP}
          onClick={() => setAgreementCode(AgreementTypeCodes.HP)}
        />
        <Button
          label={AgreementTypeCodes.LN}
          onClick={() => setAgreementCode(AgreementTypeCodes.LN)}
        />
      </div>
      <br />
      <div>
        <Button
          label={"Force Re-render"}
          onClick={() => setForcedRenders(forcedRenders + 1)}
        />
      </div>
      {agreementCode && (
        <div>
          <p>
            {agreementCode} means {label}.
          </p>
        </div>
      )}
      <RenderCounter />
      <MemoizedRenderCounter />
      <ControlledRenderCounter count={memoizedValue} />
    </>
  );
};
